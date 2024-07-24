fx_version 'cerulean'

games { "gta5" }

lua54 'yes'

author 'ANTUNES'

description 'Karma Developments LoadingScreen System 4.0'

-- Load NUI project
--loadscreen 'http://localhost:3000'
loadscreen 'web/index.html'
loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'

files {
    'web/**',
    'web/files/**',
    'web/fonts/**'
}

client_scripts { "client/client.lua" }