# ============================================================
# VA-Portfolio — Developer Makefile
# Usage: make <target>
# ============================================================

.PHONY: install dev build start clean clean-all lint lint-fix format format-check \
        type-check test test-watch test-coverage validate analyze

# ---- Environment -------------------------------------------
PNPM := pnpm

# ---- Install -----------------------------------------------
install:
	$(PNPM) install

# ---- Development -------------------------------------------
dev:
	$(PNPM) dev

build:
	$(PNPM) build

start:
	$(PNPM) start

# ---- Code Quality ------------------------------------------
lint:
	$(PNPM) lint

lint-fix:
	$(PNPM) lint:fix

format:
	$(PNPM) format

format-check:
	$(PNPM) format:check

type-check:
	$(PNPM) type-check

# ---- Testing -----------------------------------------------
test:
	$(PNPM) test

test-watch:
	$(PNPM) test:watch

test-coverage:
	$(PNPM) test:coverage

# ---- Validation (CI gate) ----------------------------------
validate: type-check lint test
	@echo "✓ All checks passed"

# ---- Cleanup -----------------------------------------------
clean:
	$(PNPM) clean

clean-all:
	$(PNPM) clean:all

# ---- Bundle Analysis ---------------------------------------
analyze:
	$(PNPM) analyze

# ---- Help --------------------------------------------------
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
	  awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo ""
	@echo "Targets: install | dev | build | start | clean | clean-all"
	@echo "         lint | lint-fix | format | format-check | type-check"
	@echo "         test | test-watch | test-coverage | validate | analyze"
