export function filterObject(data) {
    const filteredObjArray = Object.entries(data).filter(([k, v]) => !!v);

    if (!filteredObjArray.length) {
        return null;
    }

    return Object.fromEntries(filteredObjArray);
}