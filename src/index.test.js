const testPolinomio = require('./index')

//F1 Validacion de variable a
test("[0,2,3] => No se pudo resolver el polinomio",
    () => {
        expect(polinomio(0,2,3)).toBe("No se pudo resolver el polinomio")
    }
)

//F2 Validacion en el ingreso de variables
test("[a,2,1] => No se pudo resolver el polinomio",
    () => {
        expect(polinomio("a",2,3)).toBe("No se pudo resolver el polinomio")
    }
)

/
test("[5,'',1] => No se pudo resolver el polinomio",
    () => {
        expect(polinomio(5,"",1)).toBe("No se pudo resolver el polinomio")
    }
)

test("[3,2,texto] => No se pudo resolver el polinomio",
    () => {
        expect(polinomio(3,2,"texto")).toBe("No se pudo resolver el polinomio")
    }
)

//Discriminante > 0
test("[1,3,2] => 𝑟𝑎𝑖𝑧 1 = −2, 𝑟𝑎𝑖𝑧 2 = −1",
    () => {
        expect(polinomio(1,3,2)).toBe("[-2.0,-1.0]")
    }
)

//Discriminante < 0
test("[1,-2,5] => 𝑟𝑎𝑖𝑧 1 = (2-4i)/2; raiz2 = (2+4i)/2",
    () => {
        expect(polinomio(1,-2,5)).toBe("[(2-4i)/2,(2+4i)/2]")
    }
)

//Discriminnate = 0
test("[2,-8,8] => raiz=2",
    () => {
        expect(polinomio(2,-8,8)).toBe("2.0")
    }
)