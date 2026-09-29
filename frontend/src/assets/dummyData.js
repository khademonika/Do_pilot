const dummyData = {
  tasks: [
    {
      id: 1,
      title: "Complete project documentation",
      description: "Finish the technical documentation for the DoPilot project.",
      priority: "High",
      status: "In Progress",
      dueDate: "2026-09-30",
      category: "College"
    },
    {
      id: 2,
      title: "Prepare for technical interview",
      description: "Revise JavaScript, React, Node.js and MongoDB concepts.",
      priority: "High",
      status: "Pending",
      dueDate: "2026-10-01",
      category: "Career"
    },
    {
      id: 3,
      title: "Submit internship assignment",
      description: "Complete and submit the frontend assignment.",
      priority: "High",
      status: "Pending",
      dueDate: "2026-09-29",
      category: "Work"
    },
    {
      id: 4,
      title: "Review GitHub repository",
      description: "Clean the repository and update the README file.",
      priority: "Medium",
      status: "Pending",
      dueDate: "2026-10-02",
      category: "Work"
    },
    {
      id: 5,
      title: "Buy groceries",
      description: "Buy vegetables, milk, bread and fruits.",
      priority: "Low",
      status: "Pending",
      dueDate: "2026-09-30",
      category: "Personal"
    },
    {
      id: 6,
      title: "Complete React dashboard",
      description: "Build the dashboard cards and task management section.",
      priority: "High",
      status: "In Progress",
      dueDate: "2026-10-03",
      category: "Project"
    },
    {
      id: 7,
      title: "Update resume",
      description: "Add latest internship and project experience.",
      priority: "Medium",
      status: "Pending",
      dueDate: "2026-10-04",
      category: "Career"
    },
    {
      id: 8,
      title: "Practice DSA problems",
      description: "Solve 5 array and string problems.",
      priority: "Medium",
      status: "Pending",
      dueDate: "2026-09-30",
      category: "Learning"
    },
    {
      id: 9,
      title: "Deploy backend API",
      description: "Deploy the Express backend and configure environment variables.",
      priority: "High",
      status: "Pending",
      dueDate: "2026-10-05",
      category: "Project"
    },
    {
      id: 10,
      title: "Read Supabase documentation",
      description: "Learn database queries, authentication and Row Level Security.",
      priority: "Medium",
      status: "Completed",
      dueDate: "2026-09-28",
      category: "Learning"
    }
  ],

  emails: [
    {
      id: 1,
      sender: "hr@techwave.com",
      senderName: "TechWave HR",
      subject: "Interview Invitation - Frontend Developer",
      preview: "We are pleased to invite you for the next round of the interview...",
      category: "Job",
      isRead: false,
      receivedAt: "2026-09-29T09:30:00"
    },
    {
      id: 2,
      sender: "professor@sdit.ac.in",
      senderName: "Project Coordinator",
      subject: "Final Year Project Submission",
      preview: "Please submit your project progress report by Friday...",
      category: "College",
      isRead: false,
      receivedAt: "2026-09-29T08:45:00"
    },
    {
      id: 3,
      sender: "linkedin@linkedin.com",
      senderName: "LinkedIn",
      subject: "You have 5 new job recommendations",
      preview: "We found some opportunities that match your profile...",
      category: "Job",
      isRead: true,
      receivedAt: "2026-09-29T08:10:00"
    },
    {
      id: 4,
      sender: "github@github.com",
      senderName: "GitHub",
      subject: "Security alert for your repository",
      preview: "A new security issue was detected in one of your repositories...",
      category: "Important",
      isRead: false,
      receivedAt: "2026-09-28T22:15:00"
    },
    {
      id: 5,
      sender: "notion@notion.so",
      senderName: "Notion",
      subject: "Your weekly productivity report",
      preview: "Here is your productivity summary for this week...",
      category: "Promotion",
      isRead: true,
      receivedAt: "2026-09-28T18:30:00"
    },
    {
      id: 6,
      sender: "friend@gmail.com",
      senderName: "Rahul",
      subject: "Project discussion",
      preview: "Hey, can we discuss the project tomorrow?",
      category: "Personal",
      isRead: false,
      receivedAt: "2026-09-28T17:20:00"
    },
    {
      id: 7,
      sender: "aws@amazon.com",
      senderName: "AWS",
      subject: "Your AWS billing notification",
      preview: "Your estimated AWS charges for this month are available...",
      category: "Important",
      isRead: true,
      receivedAt: "2026-09-28T14:45:00"
    },
    {
      id: 8,
      sender: "internship@company.com",
      senderName: "Internship Team",
      subject: "Internship onboarding details",
      preview: "Your onboarding session is scheduled for next week...",
      category: "Job",
      isRead: false,
      receivedAt: "2026-09-28T12:00:00"
    },
    {
      id: 9,
      sender: "coursera@coursera.org",
      senderName: "Coursera",
      subject: "New courses you may like",
      preview: "Explore new courses in AI, data science and development...",
      category: "Promotion",
      isRead: true,
      receivedAt: "2026-09-27T20:15:00"
    },
    {
      id: 10,
      sender: "team@dopilot.com",
      senderName: "DoPilot Team",
      subject: "Weekly team meeting notes",
      preview: "Here are the notes and action items from today's meeting...",
      category: "Work",
      isRead: true,
      receivedAt: "2026-09-27T16:40:00"
    }
  ],

  meetings: [
    {
      id: 1,
      title: "DoPilot Team Meeting",
      description: "Discuss project progress and upcoming tasks.",
      date: "2026-09-30",
      startTime: "10:00",
      endTime: "10:45",
      location: "Google Meet",
      meetingLink: "https://meet.google.com/abc-defg-hij",
      attendees: ["Monika", "Rahul", "Ankit"]
    },
    {
      id: 2,
      title: "Frontend Development Review",
      description: "Review dashboard UI and frontend architecture.",
      date: "2026-09-30",
      startTime: "14:00",
      endTime: "15:00",
      location: "Google Meet",
      meetingLink: "https://meet.google.com/xyz-abcd-efg",
      attendees: ["Monika", "Priya"]
    },
    {
      id: 3,
      title: "Project Mentor Meeting",
      description: "Discuss project progress with faculty mentor.",
      date: "2026-10-01",
      startTime: "11:30",
      endTime: "12:00",
      location: "College",
      meetingLink: null,
      attendees: ["Monika", "Prof. Sharma"]
    },
    {
      id: 4,
      title: "Technical Interview",
      description: "Technical interview for Full Stack Developer position.",
      date: "2026-10-01",
      startTime: "18:00",
      endTime: "19:00",
      location: "Google Meet",
      meetingLink: "https://meet.google.com/inter-view-123",
      attendees: ["Monika", "HR Team"]
    },
    {
      id: 5,
      title: "Internship Onboarding",
      description: "Introduction and onboarding session for new interns.",
      date: "2026-10-02",
      startTime: "10:30",
      endTime: "11:30",
      location: "Microsoft Teams",
      meetingLink: "https://teams.microsoft.com/meeting/123",
      attendees: ["Monika", "HR", "Interns"]
    },
    {
      id: 6,
      title: "DSA Study Session",
      description: "Solve array and string problems together.",
      date: "2026-10-02",
      startTime: "19:00",
      endTime: "20:00",
      location: "Google Meet",
      meetingLink: "https://meet.google.com/dsa-study-123",
      attendees: ["Monika", "Rahul"]
    },
    {
      id: 7,
      title: "Database Architecture Discussion",
      description: "Discuss Supabase database structure and security.",
      date: "2026-10-03",
      startTime: "12:00",
      endTime: "12:45",
      location: "Google Meet",
      meetingLink: "https://meet.google.com/db-arch-123",
      attendees: ["Monika", "Ankit", "Priya"]
    },
    {
      id: 8,
      title: "Resume Review",
      description: "Review resume and discuss placement preparation.",
      date: "2026-10-04",
      startTime: "15:00",
      endTime: "15:30",
      location: "Google Meet",
      meetingLink: "https://meet.google.com/resume-123",
      attendees: ["Monika", "Career Mentor"]
    },
    {
      id: 9,
      title: "AWS Deployment Meeting",
      description: "Plan deployment of the DoPilot application.",
      date: "2026-10-05",
      startTime: "11:00",
      endTime: "12:00",
      location: "Google Meet",
      meetingLink: "https://meet.google.com/aws-deploy-123",
      attendees: ["Monika", "DevOps Team"]
    },
    {
      id: 10,
      title: "Weekly Planning",
      description: "Plan tasks and priorities for the upcoming week.",
      date: "2026-10-06",
      startTime: "09:30",
      endTime: "10:00",
      location: "Google Meet",
      meetingLink: "https://meet.google.com/weekly-plan-123",
      attendees: ["Monika", "Team"]
    }
  ]
}

export default dummyData;