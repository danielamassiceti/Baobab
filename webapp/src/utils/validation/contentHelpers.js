import { getNameList, getNames, getData } from "country-list";
export const titleOptions = [
  { value: "Mr", label: "Mr" },
  { value: "Mrs", label: "Mrs" },
  { value: "Ms", label: "Ms" },
  { value: "Hon", label: "Hon" },
  { value: "Prof", label: "Prof" },
  { value: "Dr", label: "Dr" }
];

//TODO Think of ways to deal with diverse genders
export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "prefer_not_to_say", label: "Prefer not to say" }
];

export function getCounties() {
  const rawCountryData = getNames();
  let countries = [];
  rawCountryData.forEach(function(country) {
    countries.push({
      value: country.toLowerCase().replace(/\s/g, "_"),
      label: country
    });
  });
  return countries;
}
export const getCategories = [
  { value: "4th year/honours student", label: "4th year/honours student" },
  {
    value: "Student at a coding academy/institute",
    label: "Student at a coding academy/institute"
  },
  { value: "MSc student", label: "MSc student" },
  { value: "PhD student", label: "PhD student" },
  { value: "Postdoc", label: "Postdoc" },
  { value: "Academic", label: "Academic" },
  { value: "Industry professional", label: "Industry professional" },
  {
    value: "Mentor Attendee (By Invitation)",
    label: "Mentor Attendee (By Invitation)"
  }
];
