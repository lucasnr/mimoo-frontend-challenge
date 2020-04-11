import React, { Component } from 'react';
import Quagga from 'quagga';

export default class Scanner extends Component {
	componentDidMount() {
		const { onError, onLoad } = this.props;

		Quagga.init(
			{
				inputStream: {
					type: 'LiveStream',
					constraints: {
						// width: 640,
						// height: 960,
						facingMode: 'environment', // or user
					},
				},
				locator: {
					patchSize: 'medium',
					halfSample: true,
				},
				numOfWorkers: 4,
				decoder: {
					readers: ['code_128_reader', 'ean_reader', 'codabar_reader'],
				},
				locate: true,
			},
			function (err) {
				if (err) {
					return onError(err);
				}
				Quagga.start();
				onLoad();
			}
		);
		Quagga.onDetected(this._onDetected);
	}

	componentWillUnmount() {
		Quagga.offDetected(this._onDetected);
		Quagga.stop();
	}

	_onDetected = (result) => {
		this.props.onDetected(result);
	};

	render() {
		return (
			<div
				id="interactive"
				className="viewport"
				style={{ position: 'relative' }}
			>
				<video
					className="videoCamera"
					autoPlay={true}
					preload="auto"
					src=""
					muted={true}
					playsInline={true}
				></video>
				<canvas
					className="drawingBuffer"
					style={{ position: 'absolute', top: 0, left: 0 }}
				></canvas>
			</div>
		);
	}
}
