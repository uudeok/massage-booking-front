export interface ICalendar {
  changeDateHandler: (date: Date) => void;
  selectedDate: Date | null;
}

export interface IModalProps {
  modalHandler: () => void;
}
