function peutVoter(age, nationalite) {
	if (age >= 18) {
		if (nationalite == "française") {
			return "Éligible";
		} else {
			return "Non éligible";
		}
	} else {
		return "Non éligible";
	}
}

console.log(peutVoter(20, "française")); // Résultat attendu : "Éligible"
console.log(peutVoter(16, "française")); // Résultat attendu : "Non éligible"
console.log(peutVoter(20, "espagnole")); // Résultat attendu : "Non éligible"

console.log("Pour vos paramètres : ");
let age1 = Number(prompt("Votre Age : "));
let nationalite1 = prompt("Votre Nationalité : ");

console.log(peutVoter(age1, nationalite1));
