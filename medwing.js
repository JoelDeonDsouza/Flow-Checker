const checkStatus = (country, job_position) => {

    let activity;

    if (country === "UK") {
        return activity = {
            activity_name: 'Initial call Permanent',
            assigned_agent: 'permanent_agent_uk'
        }
    } else if (country === "DE") {
        if (job_position === "doctor") {
            return activity = {
                activity_name: 'Initial call Permanent Doctors',
                assigned_agent: 'doctors_agent_de'
            }
            else {
                return activity = {
                    activity_name: 'Initial call Permanent',
                    assigned_agent: 'permanent_agent_de'
                }
            }
        }
    }
}

checkStatus('DE', 'doctor')
