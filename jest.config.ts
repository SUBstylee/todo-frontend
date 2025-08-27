import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest/presets/js-with-ts-esm', // better for Next.js + TSX
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{ tsconfig: './tsconfig.jest.json', useESM: true },
		],
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.(css|scss|sass|svg)$': '<rootDir>/__mocks__/fileMock.js',
	},
	extensionsToTreatAsEsm: ['.ts', '.tsx'], // ensures tsx files are treated as ESM
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};

export default config;
