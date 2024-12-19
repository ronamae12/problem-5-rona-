let groceryStack = [];


function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null;
    }
    console.log("Top item in the stack:", groceryStack[groceryStack.length - 1]);
    return groceryStack[groceryStack.length - 1];
}


function push(item) {
    groceryStack.push(item); 
    console.log(`Item added: ${item}`);
    console.log("Current stack:", groceryStack);
    peek(); 
}


function pop() {
    if (groceryStack.length === 0) {
        console.log("No items to pop. The stack is empty.");
        return null;
    }
    let removedItem = groceryStack.pop(); 
    console.log(`Item removed: ${removedItem}`);
    console.log("Current stack:", groceryStack);
    peek(); 
}


for (let i = 0; i < 5; i++) {
    let item = prompt("Enter a grocery item:");
    push(item); k
}


let continueRemoving = true;
while (continueRemoving && groceryStack.length > 0) {
    let popChoice = prompt("Do you want to remove an item from the stack? (yes/no)");
    if (popChoice.toLowerCase() === "yes") {
        pop(); 
    } else {
        continueRemoving = false;
        console.log("Final stack:", groceryStack);
    }