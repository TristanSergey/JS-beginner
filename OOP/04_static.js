class StaticTest {
    static a = 1;
    static hello() {
        console.log('hello');
    }
    static {
        let b = 5;
        this.a = 2;
    }
}
StaticTest.hello();
console.log(StaticTest.a);
