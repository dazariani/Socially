export const capitalizeFirstLetter = (str: string | null) => {
  if (str) {
    const upperName = str.split(" ")
    upperName.forEach(
      (name, ind) =>
        (upperName[ind] = name.slice(0, 1).toUpperCase() + name.slice(1)),
    )
    return upperName.join(" ")
  } else return ""
}
