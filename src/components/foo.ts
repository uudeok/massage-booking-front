interface IPrinter {
  print: (arg: number) => number;
  print2: (arg: number) => number;
}

abstract class BasePrinter implements IPrinter {
  print(arg: number): number {
    console.log("print를 구현해주세요");
    return arg;
  }

  print2(arg: number): number {
    console.log("print2를 구현해주세요");
    return arg;
  }
}

class Printer extends BasePrinter {
  override print(arg: number): number {
    console.log(arg + 1);
    return arg;
  }

  override print2(arg: number): number {
    console.log(arg + 2);
    return arg;
  }
}

class Printer2 extends BasePrinter {
  override print(arg: number): number {
    console.log(arg + 3);
    return arg;
  }
}

class Printer3 extends BasePrinter {
  override print(arg: number): number {
    console.log(arg + 5);
    return arg;
  }
}

export const myPrinter = (type: string): IPrinter => {
  let p = null;
  if (type == "printer") {
    p = new Printer();
  }

  if (type == "printer2") {
    p = new Printer2();
  }

  if (type == "printer3") {
    p = new Printer3();
  }

  if (p == null) {
    throw new Error("error");
  }

  return p;
};

myPrinter("printer").print(1);

myPrinter("printer2").print2(2);

myPrinter("printer3").print2(10);
