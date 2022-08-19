export default function nameValidation(name: string) {
	// validação de nome
	name.trim();

	if(name == null) {
		return false;
	}

	return true;
}
