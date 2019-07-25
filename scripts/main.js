getAPIData().then((jobs) => {
    for (const data of jobs.results) {
                const jobHTML = createJobHTML(data)
                renderJob(jobHTML)
            }
})

