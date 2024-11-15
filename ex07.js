function isNationalIDValid(name, age, zip, password) {
	if (name == "John" && age == 18 && zip == 69100 && password == "amerty") {
		return true;
	} else {
		return false;
	}
}

console.log(isNationalIDValid("", 18, 69100, "hello")); // Résultat attendu: false
console.log(isNationalIDValid("John", 18, 69100, "amerty")); // Résultat attendu: true
