function getHeight(totalData: number, width: number) {
    if (((totalData >= 2 && totalData <= 20) && (width <= 768)) ||
        ((totalData >= 8 && totalData <= 20) && (width >= 768))) {
        return false;
    }
    return true;
}

export default getHeight;
