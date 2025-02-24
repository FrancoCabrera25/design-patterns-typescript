/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburger {
    prepare(): void;
}

class ChickenHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando una hamburguesa de pollo');
    }
}

class BeefHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando una hamburguesa de carne');
    }
}

class BeanHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando una hamburguesa de frijoles');
    }
}

abstract class Restaurant {
    abstract createHamburger(): Hamburger;

    orderHamburger(): void {
        const hamburger = this.createHamburger();

        hamburger.prepare();
    }
}

class ChickenRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new ChickenHamburger();
    }
}

class BeefRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new BeefHamburger();
    }
}

class BeanRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new BeanHamburger();
    }
}

function main() {
  let restaurant: Restaurant;

  const burgerType = prompt('¿Qué tipo de hamburguesa desea? (chicken/beef/bean)');

  if (burgerType === 'chicken') {
    restaurant = new ChickenRestaurant();
  } else if (burgerType === 'beef') {
    restaurant = new BeefRestaurant();
  } else if (burgerType === 'bean') {
    restaurant = new BeanRestaurant();
  } else {
    throw new Error('Tipo de hamburguesa no válido');
  }

  restaurant.orderHamburger();
}

main();
