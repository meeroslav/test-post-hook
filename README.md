# Test Post Execution Hook

To verify functionality run with:
```sh
NX_DAEMON=false pnpm nx affected -t lint
```

> Note: `NX_DAEMON` must be disabled to see logs from plugin directly in terminal. Otherwise they can be found in `./nx/workspace-data/d/daemon.log`
