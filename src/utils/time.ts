import moment from "moment"

export const getRelativeTimestamp = (timestamp: string) => {
    const date = dateFromUNIX(timestamp)
    return moment(date).fromNow()
}

export const dateFromUNIX = (timestamp: string) => {
    const intTimestamp = parseInt(timestamp) / 1_000_000
    return new Date(intTimestamp)
}