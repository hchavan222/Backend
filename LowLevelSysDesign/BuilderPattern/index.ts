class Product{
    parts : string[] = []
}

interface IBuilder{
    buildPartA() : this
    buildPartB(): this
    buildPartC(): this
    getResults(): Product
}


class Builder implements IBuilder{

    private product = new Product()

    buildPartA(): this {
        this.product.parts.push("BuilderA")
        return this

        
    }

    buildPartB(): this {
        this.product.parts.push("BuilderA")
        return this

        
    }

    buildPartC(): this {
        this.product.parts.push("BuilderA")
        return this

        
    }

    getResults(): Product {
        const result = this.product;
        this.product = new Product()
        return result
    }

}

const builder = new Builder();
const result = builder.buildPartA().buildPartB().buildPartC().getResults()

console.log(result.parts)