/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */


class DragonBalls {
    private static instance: DragonBalls;
    private ballsCollected: number = 0;

    private constructor() {
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls {
        if (!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
        }
        return DragonBalls.instance;
    }
    
    public collectBall(): void {
        if(this.ballsCollected < 7) {
            this.ballsCollected++;
        } else {
            console.log("No se pueden recolectar más bolas de dragón");
        }
    }

    summonShenLong(): void {
        if(this.ballsCollected === 7) {
            console.log("Shen Long ha sido invocado");
            this.ballsCollected = 0;
        } else {
            console.log("No se puede invocar a Shen Long, se necesitan 7 bolas de dragón");
        }
    }

    public getBallsCollected(): number {
        return this.ballsCollected;
    }

}

function main() {
    const dragonBalls = DragonBalls.getInstance();
    dragonBalls.collectBall();
    dragonBalls.collectBall();
    dragonBalls.collectBall();
    dragonBalls.collectBall();
    dragonBalls.collectBall();
    dragonBalls.collectBall();
    dragonBalls.collectBall();
    dragonBalls.summonShenLong();
}

main();