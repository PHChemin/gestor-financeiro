import { toFloat, toFormatedDate, toInteger } from "./convertionService";
import { getBills, saveBill } from "./localStorageService";

function getBillId() {
  return getBills().length;
}

function getParcelValue(value, parcels) {
  let parcelValue = (toFloat(value) / toInteger(parcels)).toFixed(2);
  return toFloat(parcelValue);
}

export function getDateParcel(initialDate, parcel) {
  let parcelDate = new Date(initialDate);
  parcelDate.setMonth(parcelDate.getMonth() + (parcel - 1));
  parcelDate.setDate(parcelDate.getDate() + 1);
  return toFormatedDate(parcelDate);
}

export function createBill(name, value, parcels, dueDate) {
  const bill = {
    id: getBillId(),
    name: name,
    value: toFloat(value),
    parcels: toInteger(parcels),
    parcelsValue: getParcelValue(value, parcels),
    dueDate: dueDate,
  };
  saveBill(bill);
}
