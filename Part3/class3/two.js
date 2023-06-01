class Parent {
    m1() {
        console.log("Parent class Method m1()")
    }
    m2() {
        console.log("Parent class Method m2()")
    }
}
class Child extends Parent {
    m3() {
        console.log("Child class Method m3()")
    }
}
let c1 = new Child()

c1.m1()
c1.m2()
c1.m3()