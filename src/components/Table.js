import React, {useEffect, useState} from 'react';
import {usersJSON} from '../data';

export const Table = ({sortBy}) => {
	const [users, setUsers] = useState(usersJSON)

	useEffect(() => {
		compareBy(users,sortBy)
	});


	
	const compareBy = (users, sortBy) => {
		debugger
			if(sortBy === "Age"){
				users.sort((a, b) => a.age - b.age)
				setUsers(users)
				compareByAge(users)
			}
			else if(sortBy === "Name"){
				setUsers(users.sort((a, b) => {
					var aname = a.name.toUpperCase()
					var bname = b.name.toUpperCase()
					
					return ((aname < bname) ? -1 : (aname > bname) ? 1 : 0)
				}))
			}
			else if(sortBy === "Rank"){
				setUsers(users.sort((a, b) => a.rank - b.rank))
			}
			if(sortBy === "Points"){
				setUsers(users.sort((a, b) => a.points - b.points))
			}
	}

	const compareByAge = (user) => {
		setUsers(user)
	}

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		users: usersJSON
	// 	}
	// }
	

	// static getDerivedStateFromProps(props, state) {
	// 	var {sortBy} = props
	// 	var {users} = state
		
	// 	if(sortBy === "Age"){
	// 		users.sort((a, b) => a.age - b.age)
	// 	}
	// 	else if(sortBy === "Name"){
	// 		users.sort((a, b) => {
	// 			var aname = a.name.toUpperCase()
	// 			var bname = b.name.toUpperCase()
				
	// 			return ((aname < bname) ? -1 : (aname > bname) ? 1 : 0)
	// 		})
	// 	}
	// 	else if(sortBy === "Rank"){
	// 		users.sort((a, b) => a.rank - b.rank)
	// 	}
	// 	if(sortBy === "Points"){
	// 		users.sort((a, b) => a.points - b.points)
	// 	}
	// 	return state
	// }

	// render() {
 
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{users.map((item, index) => {
						return (
							<tr key={index}>
								<th>{item.age}</th>
								<th>{item.name}</th>
								<th>{item.points}</th>
								<th>{item.rank}</th>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>)
	// }
}
export default Table