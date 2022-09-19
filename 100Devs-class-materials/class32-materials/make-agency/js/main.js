class MakeAgency {
  constructor(name, position, skills) {
    this._name = name;
    this._position = position;
    this._skills = skills;
  }
  get name() {
    return this._name;
  }
  get position() {
    return this._position;
  }
  get skills() {
    return this.skils;
  }
  YowWorld() {
    console.log(
      `Hey! My name is ${this._name} and I'm a ${this._position} at #100Devs Agency`
    );
  }
}
class Frontend extends MakeAgency {
  constructor(
    name,
    position,
    skills,
    jobRoles,
    department,
    techAdvocacy,
    techTools
  ) {
    super(name, position, skills);
    this._jobRoles = jobRoles;
    this._department = department;
    this._techAdvocacy = techAdvocacy;
    this._techTools = techTools;
  }
  get jobRoles() {
    return this._jobRoles;
  }
  get department() {
    return this._department;
  }
  get techAdvocacy() {
    return this._techAdvocacy;
  }
  get techTools() {
    return (this._techTools = techTools);
  }
  YowWorld() {
    console.log(
      `Hey! My name is ${this._name} and I'm a ${this._position} at #100Devs Agency at the ${this._department} Team and here's some of what I do: ${this._jobRoles}`
    );
  }
}
class Backend extends MakeAgency {
  constructor(
    name,
    position,
    skills,
    jobRoles,
    department,
    techAdvocacy,
    techTools
  ) {
    super(name, position, skills);
    this._jobRoles = jobRoles;
    this._department = department;
    this._techAdvocacy = techAdvocacy;
    this._techTools = techTools;
  }
  get jobRoles() {
    return this._jobRoles;
  }
  get department() {
    return this._department;
  }
  get techAdvocacy() {
    return this._techAdvocacy;
  }
  get techTools() {
    return (this._techTools = techTools);
  }
  YowWorld() {
    console.log(
      `Hey! My name is ${this._name} and I'm a ${this._position} at #100Devs Agency at the ${this._department} Team. Here's some of what I do: ${this._jobRoles} and the some tool I use: ${this._techTools}`
    );
  }
}

let Ben = new Frontend(
  "Ben",
  "Frontend",
  "JS",
  "To break codes",
  "The Hackers",
  "Women SHOULD CODE",
  "VSCode"
);

let Anj = new Backend(
  "Anj",
  "Backend",
  "Node",
  "To break the software",
  "The Hackers",
  "Everyone can be engineers",
  "Terminals"
);

let employeeList = ["Ben", "Anj"];

// POLYMORPHISM. employee = variable
for (employee of employeeList) {
  employee.YowWorld();
}
