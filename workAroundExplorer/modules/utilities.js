export const formatNumber = (number) => {
    return Intl.NumberFormat("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(number);
};
