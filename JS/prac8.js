let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//To remove the first company:
companies.shift();
//To select, remove and replace:
companies.splice(2, 2, "Ola");
//To add in the:
companies.push("Amazon");

console.log(companies);