const getAPIData = () => {
    return fetch("https://api.stevebrownlee.com/jobs/")
        .then(data => data.json())
        // .then((arrayOfData) => {
        //     //     let array = arrayOfData.results
        //     //     for (const data in array) {
        //     //         const storednumber = (data)
        //     //         const storedData = array[storednumber]
        //     //         const convertedData = createJobHTML(storedData)
        //     //         renderJob(convertedData)
        //     //     }
        //     // })
        //     for (const data of arrayOfData.results) {
        //         const jobHTML = createJobHTML(data)
        //         renderJob(jobHTML)
        //     }

        // })
}
