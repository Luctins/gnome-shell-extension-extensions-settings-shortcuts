/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0
 */


/* imports */
const { Gio, Glib } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

/* Extension code */
class Extension {
	formatDesktopEntry(name, UUID, comment=" ", iconPath=" ") {
		return new String("[Desktop Entry]\nName="+name+"\nGenericName=Extension Setting"+"\nComment="+comment+"\nExec=gnome-extensions prefs "+UUID+"\nTerminal=false\nType=Application\nIcon="+iconPath+"\nCategories=Settings;Preferences;");
	}

	constructor() {
		//this.file_list_name = 'file-list';
		this.settings = ExtensionUtils.getSettings();
	}

	enable() {
		log(`enabled ${Me.metadata.name}`);

		prev_list = this.settings.get(this.file_list_name);


		// uuid_list = ExtensionUtils.getUuids();
		//let path = Glib.build_filenamev
		//let [succ, content] = file.load_contents(null);
		//TODO: try to load config on startup
		//TODO: create json file for storing extensions which already have files
		//TODO: create new files for each extension which has no file

	}

	disable() {

	}
}

function init() {
	return new Extension();
}
