import styled from "@emotion/styled";

export const StyledSelect = styled.select`
  background: #fdfdfd;
  border: 0.5px solid #cbd5e0;
  height: 100%;
  width: 100%;
  border-radius: 7px;
  padding: 0 10px;
`;

export const StyledOption = styled.option`
  padding: 100px;
`;

// export const DropDownContainer = styled.span`
//   margin: 0;
//   min-width: 100%;
//   position: relative;
//   display: inline-block;
//   min-height: 2em;
//   max-height: 2em;
//   overflow: hidden;
//   top: 0.5em;
//   cursor: pointer;
//   text-align: left;
//   white-space: nowrap;
//   color: #444;
//   outline: none;
//   border: 0.06em solid transparent;
//   border-radius: 1em;
//   background-color: #cde4f5;
//   transition: 0.3s all ease-in-out;

//   &::after {
//     content: "";
//     position: absolute;
//     right: 0.8em;
//     top: 0.9em;
//     border: 0.3em solid #3694d7;
//     border-color: #3694d7 transparent transparent transparent;
//     transition: 0.4s all ease-in-out;
//   }

//   /* &:nth-child(2) {
//     border-top: 0.06em solid #d9d9d9;
//   } */
// `;

// export const SelectInputRadio = styled.input`
//   width: 1px;
//   height: 1px;
//   display: inline-block;
//   position: absolute;
//   opacity: 0.01;

//   &:focus {
//     background: #def;
//   }

//   /* &:checked {
//     display: block;
//     border-top: none;
//     position: absolute;
//     top: 0;
//     width: 100%;
//   } */
// `;

// export const SelectLabel = styled.label`
//   border-top: 0.06em solid #d9d9d9;
//   display: block;
//   height: 2em;
//   line-height: 2em;
//   padding-left: 1em;
//   padding-right: 3em;
//   cursor: pointer;
//   position: relative;
//   transition: 0.3s color ease-in-out;
// `;

// <DropDownContainer
//   className={`dropdown-el ${expanded ? "expanded" : ""}`}
// >
//   {/* <input type="radio" name="sortType" value="Relevance" id="sort-relevance" onClick={handleValue} /><label htmlFor="sort-relevance">Relevance</label> */}
//   <SelectInputRadio type="radio" />
//   <SelectLabel htmlFor="sort-best">Product Popularity</SelectLabel>
//   <SelectInputRadio
//     onClick={handleValue}
//     type="radio"
//     name="sortType"
//     value="PriceIncreasing"
//     id="sort-low"
//   />
//   <SelectLabel htmlFor="sort-low">Price Low to High</SelectLabel>
//   <SelectInputRadio
//     onClick={handleValue}
//     type="radio"
//     name="sortType"
//     value="PriceDecreasing"
//     id="sort-high"
//   />
//   <SelectLabel htmlFor="sort-high">Price High to Low</SelectLabel>
//   <SelectInputRadio
//     onClick={handleValue}
//     type="radio"
//     name="sortType"
//     value="ProductBrand"
//     id="sort-brand"
//   />
//   <SelectLabel htmlFor="sort-brand">Product Brand</SelectLabel>
//   <SelectInputRadio
//     onClick={handleValue}
//     type="radio"
//     name="sortType"
//     value="ProductName"
//     id="sort-name"
//   />
//   <SelectLabel htmlFor="sort-name">Product Name</SelectLabel>
// </DropDownContainer>;
