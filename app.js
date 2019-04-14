// 4) Given two strings, write a program that outputs the shortest sequence of character 
// insertions and deletions that turn one string into the other.

class TransformText {
    constructor(text1, text2) {
        this.text1 = text1;
        this.text2 = text2;
        this.text = [...this.text2].reduce((prev, curr, index) => {
            console.log("  index:", index, "  prev:", prev, "  curr:", curr);
            return curr === prev[index] ? prev : prev.substring(0, index) + this.text2[index] + prev.substr(index);
        }, this.text1).substring(0, text2.length);
    }
}

let newText = new TransformText("free", "ferie");
console.log(newText);
