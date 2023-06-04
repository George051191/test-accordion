export type TTheme = {
  bgColor: string,
  tableBgColor: string;
  copyButtonFill: string,
  mainFontColor: string,
  selectButtonFont:string,
  selectButtonBorder: string,
  sectionBorderColor: string,
  stopButtonColor: string,
  inWorkButtonColor: string,
  doneButtonColor: string,
  toDoListColorButton: string,
  notPrimaryTextColor: string,
  tableHeaderColor: string,
  selectButtonFontColor: string,
  switcherTextColor: string,
};

export type TTableRow = {
  date: string,
  code: string,
  project: string,
  task: string,
  response: string,
  goto: string,
  prioritet: number,
  comment: string,
  time: string,
  fact: string,
  start: string,
  end: string,
};

export type TTaskType = {
  title: string,
  open: () => void,
  openState: boolean,
  current: string,
};
