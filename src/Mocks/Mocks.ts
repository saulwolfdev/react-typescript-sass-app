import { IItemsTaskNames, IItemsTextSection, IItemHeader } from "../Entidades";
import logo from "../img/svg/logo.svg";
import { v4 as uuidv4 } from 'uuid';
class Mocks {

	public GetItemsTaskNames(): IItemsTaskNames[] {
		return [
			{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR1", saludarMetodo() { return "hola" } },
			{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR2", saludarMetodo() { return "hola tengo sueño" } },
			{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR3", saludarMetodo: () => 'hola' },

		];
	}

	public GetItemsHeader(): IItemHeader {
		return {
			logoSvg: logo,
			produkt: "Product",
			pricing: "Pricing",
			compare: "Compare",
			solutions: "Solutions",
			help: "Help",
		};
	}

	public GetItemsTextSection(): IItemsTextSection[] {
		return [
			{
				id: uuidv4(),
				identify: "Enter",
				title: "The Enterprise solution for efficient teams",
				img: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdb5010b9ef2d361ee0b85_Enterprise-Hero%402x.png",
				description: "Produck allows you to build at scale, bringing your whole organization to a single place to collaborate, innovate, and move work forward.",
				textTip: "FREE Asana & Jira Migration! Transfer everything in seconds!",
				addText: "Free forever version with Unlimited Users. Free 14-days trial to test Premium. No credit card required. Cancel anytime."
			},
			{
				id: uuidv4(),
				identify: "Whole",
				title: "Your whole organization on Produck",
				img: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdb52633f0ea753709d2c5_Folder-tree-enterprise%402x-p-500.png",
				description: "Produck offers the flexibility to organize your departments, platforms, projects, or products in a way that fits your organization’s unique needs.",
				icons: [
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5bcf7ff0a798ce50a2c5cd94_Macbook.png",
						description: "Have a single place for your entire organization to collaborate and move work forward"
					},
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdbe7108feb96a2ffa3828_Team%402x.png",
						description: "Enable teams’ autonomy while having full control of processes and workflows"
					},
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdbe9908feb9ace2fa38f5_Tree%402x.png",
						description: "Move projects between teams, or have multi-project tasks, enabling cross-team collaboration"
					}
				]
			},
			{
				id: uuidv4(),
				identify: "Portfolio",
				title: "Portfolio Monitor",
				img: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5d63fb75afd53f66f91f62c8_Screenshot%202019-08-26%20at%2017.23.10.png",
				description: "Every folder has its own dashboard displaying an overview of nested projects and sprints.",
				icons: [
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdbebd08feb913e7fa3954_Flag%402x.png",
						description: "Quickly visualize how each department/team’s projects and sprints are progressing"
					},
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdbec908feb94ffcfa3961_Management%402x.png",
						description: "Have an overview of projects across your entire organization with your team dashboard"
					}
				]
			},
			{
				id: uuidv4(),
				identify: "Granular",
				title: "Granular Roles and Permissions",
				img: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdb54608feb9be77fa1d24_Premissions%402x.png",
				description: "Have full control of what every member can access, view, or do in your organization.",
				icons: [
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5bcf7ff0a798ce8576c5cdce_MemberManagement.png",
						description: "Have different levels of permissions for the same person within different departments, teams, or projects"
					},
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdbf3b9639c448f273e54b_Chair.png",
						description: "Invite stakeholders as free guests to only see the basics and get involved"
					},
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5bcf7ff0a798ce2d7bc5cdcf_RolesAndPermissions.png",
						description: "Grant restricted access to contractors on a project-by-project basis"
					}
				]
			},
			{
				id: uuidv4(),
				identify: "Plan",
				title: "Plan and Report",
				img: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdb2c015eeac7633ef8c26_Group%402x.png",
				description: "Keep your work on track, adapt to scope changes, and have a predicted time when things will get done, keeping projects on time and on budget. Produck is perfect for agile teams, offering you all the tools you need with a great experience and responsiveness.",
				icons: [
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5bcf7ff0a798cea66ac5cc7a_Sprint.png",
						description: "Use sprints to combine tasks from multiple projects that need to be completed during a specific timeframe"
					},
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5bcf7ff0a798ce3a94c5cd16_Group%2013.png",
						description: "Besides list view, you can visualize sprints and projects on Kanban boards"
					},
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdbf970b9ef2383dee2918_Quality.png",
						description: "Produck offers epics ,multiple assignees, priority levels, and more"
					}
				],
				propTip: "Pro Tip: Group Tasks. Use our “Group by” feature to have a better overview. Group by Assignee is great to see the workload of your team and change assignments accordingly, while Group by Status gives you a clear indicator to spot blocks and delays."
			},
			{
				id: uuidv4(),
				identify: "Live",
				title: "Live Reporting",
				img: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdb58e9639c4307673cdcd_Burndow-Chart%402x.png",
				description: "Burndown Charts and Release Reports are live-updated, meaning if anything changes on your sprint you will see it reflected immediately.",
				icons: [
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdc0070b9ef2a1d2ee2979_Presentations%402x.png",
						description: "Use Burndown Charts to help you to meet deadlines and track your team speed"
					},
					{
						iconUrl: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdbead9639c48ab473e4d5_Calendar%402x.png",
						description: "Release Reports help you to manage scope changes and better predict end dates"
					}
				],
				propTip: "Pro Tip: Predict the future and avoid surprises! Use Release Reports’ predictive algorithm to have a glance at when a sprint will be completed based on the work that was already done and your team’s velocity. With this, you can communicate delays early or adapt the scope to reach your deadlines."
			},
		];
	}
}
export default Mocks;
