export class ReminderData {
  name: string;
  time: Date;
  description: string;
  alert(): void { 
    window.alert("Reminder Added")
  };

  constructor(name: string,
    time: Date,
    description: string
    ) {
    this.name = name;
    this.time = time;
    this.description = description;
  }
}
