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


/**
 RF
 */