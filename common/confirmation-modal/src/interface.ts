export interface confirmationModal {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
}
