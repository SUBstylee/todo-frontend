import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.(css|scss|sass|svg)$': '<rootDir>/__mocks__/fileMock.js',
	},
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};

export default config;
