import React, { Component } from 'react';
import Quagga from 'quagga';

export default class Scanner extends Component {
	componentDidMount() {
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
					return alert(err);
				}
				Quagga.start();
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
					class="videoCamera"
					autoplay="true"
					preload="auto"
					src=""
					muted="true"
					playsinline="true"
				></video>
				<canvas
					class="drawingBuffer"
					style={{ position: 'absolute', top: 0, left: 0 }}
				></canvas>
			</div>
		);
	}
}
