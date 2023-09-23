export let createDateString: () => string = () => {
    let date = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        fractionalSecondDigits: 3,
        timeZoneName: 'short',
    }).format(date);

    // Append the offset information
    //   @ts-ignore
    const offset = new Intl.DateTimeFormat('en-US', {
        timeZoneName: 'short',
    }).formatToParts(date).find((part: any) => part.type === 'timeZoneName').value;

    const formattedDateString = `${formattedDate}${offset}`;

    return formattedDateString
}