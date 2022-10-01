import { memo, useState, useCallback, useContext } from "react";
import AddCard from './AddCard';
import EditCard from './EditCard';
import { cardType, ColumnsType } from './Interface';
import { ColumnData } from '../Contexts/ColumnData'

interface columnPropType { filter: string }

const Column = ({ filter }: columnPropType) => {

  const { listData, search, setListData, setLocalStorageSaveCHK } = useContext<ColumnsType>(ColumnData)
  const [add, setAdd] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)
  const [card, setCard] = useState<cardType>(
    {
      ID: 0,
      title: "",
      body: "",
      date: 0,
      columnType: "Default",
      personName: "",
    });
  const onUpdateCards = useCallback((updatedCard: cardType) => {
    const updatedCards: cardType[] = listData.map((card: cardType) => {
      if (card.ID === updatedCard.ID) return updatedCard;
      return card;
    });
    setListData(updatedCards)
  }, [listData, setListData]);

  const handleDelete = useCallback((cardDate: number) => () => {
    setListData(listData.filter((currentCard: { ID: number }) => currentCard.ID !== cardDate));
    setLocalStorageSaveCHK(true)
  }, [listData, setListData, setLocalStorageSaveCHK]);

  const handleEdit = useCallback((item: cardType) => () => {
    setEdit(true);
    setCard(item);
  }, []);

  const onAddCard = (newCard: cardType) => setListData([...listData, newCard])

  const addButton = useCallback(() => setAdd(true), []);

  return (
    <div className="column">
      <div className="column_head">
        <h3>{filter}</h3>
        <button onClick={addButton}>Add</button>
      </div>
      {add && <AddCard filter={filter} onAddCard={onAddCard} listData={listData} setAdd={setAdd} setLocalStorageSaveCHK={setLocalStorageSaveCHK} />}
      {edit && <EditCard card={card} onUpdateCards={onUpdateCards} setEdit={setEdit} setLocalStorageSaveCHK={setLocalStorageSaveCHK} />}
      <div className="cardSide">
        {listData.filter((currentCard: cardType) => {
          if (search === "" && currentCard.columnType === filter) return currentCard;
          else if (currentCard.title.toLocaleLowerCase().includes(search.toLowerCase()) && currentCard.columnType === filter) return currentCard;
          else if (currentCard.body.toLocaleLowerCase().includes(search.toLowerCase()) && currentCard.columnType === filter) return currentCard;
        }).map((currentCard: cardType) => {
          return (
            <div className="card" key={currentCard.ID}>
              <div className="cardTitle">
                <strong>{currentCard.title}</strong>
                <div className="btn">
                  <button onClick={handleEdit(currentCard)}>Edit</button>
                  <button onClick={handleDelete(currentCard.ID)}>Delete</button></div>
              </div>
              <p>{currentCard.body}</p>
              <div className="lower">
                <small>Last Modified {new Date(currentCard.date).toLocaleDateString("en-GB", { hour: "2-digit", minute: "2-digit", })}</small>
                <small>{currentCard.personName}</small>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default memo(Column)