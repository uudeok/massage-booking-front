export type TCalendar = {
  changeDateHandler: (date: Date) => void;
  selectedDate: Date | null;
};

export type TBackDrop = {
  onClose: () => void;
};

export type TModal = {
  onClose: () => void;
  children: React.ReactNode;
};
