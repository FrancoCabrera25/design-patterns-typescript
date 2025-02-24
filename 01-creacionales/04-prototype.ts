/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */


class Document {
    title: string;
    author: string;
    private content: string;

    constructor(title: string, author: string, content: string) {
        this.title = title;
        this.author = author;
        this.content = content;
    }

    clone(): Document {
        return new Document(this.title, this.author, this.content);
    }

    display(): void {
        console.log(`Title: ${this.title} - Author: ${this.author}`);
        console.log(this.content);
    }
}

function main() {
    const document1 = new Document('Document 1', 'Author 1', 'Content 1');
    const clonedDocument = document1.clone();

    document1.display();
    clonedDocument.display();
}

main(); 