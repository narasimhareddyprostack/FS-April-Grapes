class Parent {
    constructor() {
        console.log("Parent Class Const")
    }
}
class Child extends Parent {
    constructor() {
        super()
        console.log("Child Class - const")
    }
}

new Child()