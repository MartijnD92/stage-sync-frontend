import { actions, roles } from './constants.js';

const mappings = new Map();

mappings.set(actions.VIEW_RECORD, [roles.ADMIN, roles.MODERATOR, roles.USER]);
mappings.set(actions.CREATE_RECORD, [roles.ADMIN, roles.MODERATOR, roles.USER]);
mappings.set(actions.DELETE_RECORD, [roles.MODERATOR]);

function hasPermission(user, action) {
	if (!user?.accessLevels) {
		return false;
	}

	if (mappings.has(action)) {
		for (const accessLevel of user.accessLevels) {
			if (mappings.get(action).includes(accessLevel.name)) {
				return mappings.get(action).includes(accessLevel.name);
			}
		}
	}
	return false;
}

export default hasPermission;
export { actions, roles };
