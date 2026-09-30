CREATE TABLE `entries` (
	`id` text PRIMARY KEY NOT NULL,
	`label` text NOT NULL,
	`amount` integer NOT NULL,
	`kind` text NOT NULL,
	`category` text NOT NULL,
	`date` text NOT NULL,
	`frequency` text NOT NULL,
	`end_date` text,
	`note` text DEFAULT '' NOT NULL
);
