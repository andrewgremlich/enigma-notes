import { Fragment } from "react";

type CalendarNode = {
	dateCreated: string;
	data: string;
};

type CalendarViewerContentsProps = {
	data: CalendarNode[];
};

export const CalendarViewerContents = ({
	data,
}: CalendarViewerContentsProps) => {
	return (
		<div>
			{data.map(({ dateCreated, data }, index) => (
				<Fragment key={self.crypto.randomUUID()}>
					<div className="p-4">
						<h2>{dateCreated}</h2>
						<p>{data}</p>
					</div>
					{index < data.length - 1 && <hr />}
				</Fragment>
			))}
		</div>
	);
};
