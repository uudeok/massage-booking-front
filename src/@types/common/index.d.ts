export interface ICalendar {
  changeDateHandler: (date: Date) => void;
  selectedDate: Date | null;
}

export interface IBackDrop {
  onClose: () => void;
}

interface IModal {
  onClose: () => void;
  children: React.ReactNode;
}
