	GO4K_ENV	ATTAC(0),DECAY(0),SUSTAIN(64),RELEASE(64),GAIN(128)
	GO4K_VCO	TRANSPOSE(64),DETUNE(64),PHASE(0),GATES(0),COLOR(128),SHAPE(127),GAIN(128),FLAGS(TRISAW)
	GO4K_VCO	TRANSPOSE(64),DETUNE(80),PHASE(32),GATES(0),COLOR(128),SHAPE(127),GAIN(128),FLAGS(TRISAW)
	GO4K_FOP	OP(FOP_ADDP)
	GO4K_FOP	OP(FOP_MULP)
	GO4K_VCF	FREQUENCY(48),RESONANCE(4),VCFTYPE(LOWPASS)
	GO4K_DST	DRIVE(127), SNHFREQ(128), FLAGS(0)
	GO4K_VCO	TRANSPOSE(64),DETUNE(64),PHASE(0),GATES(0),COLOR(64),SHAPE(64),GAIN(128),FLAGS(SINE)
	GO4K_FST	AMOUNT(68),DEST(1*MAX_UNIT_SLOTS+1+FST_SET)
	GO4K_FOP	OP(FOP_POP)
	GO4K_ENV	ATTAC(0),DECAY(0),SUSTAIN(128),RELEASE(128),GAIN(128)
	GO4K_FST	AMOUNT(70),DEST(1*MAX_UNIT_SLOTS+1+FST_SET)
	GO4K_FST	AMOUNT(58),DEST(2*MAX_UNIT_SLOTS+1+FST_SET)
	GO4K_FST	AMOUNT(48),DEST(5*MAX_UNIT_SLOTS+4+FST_SET)
	GO4K_FOP	OP(FOP_MULP)
	GO4K_DLL	PREGAIN(72),DRY(0),FEEDBACK(32),DAMP(109),FREQUENCY(0),DEPTH(0),DELAY(9),COUNT(8) ; ERROR
	GO4K_DLL	PREGAIN(16),DRY(128),FEEDBACK(32),DAMP(109),FREQUENCY(0),DEPTH(0),DELAY(17),COUNT(1) ; ERROR
	GO4K_PAN	PANNING(64)
	GO4K_OUT	GAIN(48), AUXSEND(8)