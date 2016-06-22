var cloud = (function (path) {

	var app = new MF(43239, []);
	app.login({
			email: 'joaguerrero@tamu.edu',
			password: 'Joaquin_1'
		},
		function (data) {

			alert(JSON.stringify(data.response, null, 4));

			app.api('system/get_info', null,
				{success: function (data) {

					alert(JSON.stringify(data, null, 4));

					window.requestFileSystem(0, 5 * 1024 * 1024,
						function (filesystem) {

							alert("Got the FS");

							filesystem.root.getFile(path, {}, function (fileEntry) {

								app.upload(fileEntry, {
									onUpdate: function (uploader, file, state) {
										alert(file.name + state);
									},

									onUploadProgress: function (uploader, file, bytes) {
										alert('uploaded: ' + bytes);
									},

									onHashProgress: function (uploader, file, bytes) {
										alert('hashed: ' + bytes);
									}
								});

							});
						});

				}
			, error: function () {
					alert ('OH NOE!');
				}});
		}, function (data) {
			alert(JSON.stringify(data, null, 4));
		});
});
