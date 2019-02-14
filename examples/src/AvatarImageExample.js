import React from 'react';

import Avatar from '../../src/components/avatar';

const LevieFace =
    'data:image/png;base64,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';

const AvatarImageExample = () => <Avatar avatarUrl={LevieFace} />;

export default AvatarImageExample;
