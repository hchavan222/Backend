var Product = /** @class */ (function () {
    function Product() {
        this.parts = [];
    }
    return Product;
}());
var Builder = /** @class */ (function () {
    function Builder() {
        this.product = new Product();
    }
    Builder.prototype.buildPartA = function () {
        this.product.parts.push("BuilderA");
        return this;
    };
    Builder.prototype.buildPartB = function () {
        this.product.parts.push("BuilderA");
        return this;
    };
    Builder.prototype.buildPartC = function () {
        this.product.parts.push("BuilderA");
        return this;
    };
    Builder.prototype.getResults = function () {
        var result = this.product;
        this.product = new Product();
        return result;
    };
    return Builder;
}());
var builder = new Builder();
var result = builder.buildPartA().buildPartB().buildPartC().getResults();
console.log(result.parts);
