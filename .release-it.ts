import type { Config } from "release-it";

export default {
    git: {
        changelog: "git cliff --unreleased",
        commit: true,
        commitArgs: ["-S"],
        tag: true,
        tagArgs: ["-s"],
        tagName: `v\${version}`,
        push: true,
    },
    github: {
        web: true,
        release: true,
        releaseNotes: "echo 'See the [CHANGELOG.md](CHANGELOG.md)'",
    },
    npm: {
        publish: false,
    },
    hooks: {
        "before:init": "tsdown",
        "after:bump": `git cliff --output CHANGELOG.md --tag \${version}`,
    },
} satisfies Config;
